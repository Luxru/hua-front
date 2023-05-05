import os
import json
import hashlib

def fileToSHA256(file_path):
    # BUF_SIZE is totally arbitrary, change for your app!
    BUF_SIZE = 65536  # lets read stuff in 64kb chunks!
    sha256 = hashlib.sha256()
    with open(file_path, 'rb') as f:
        while True:
            data = f.read(BUF_SIZE)
            if not data:
                break
            sha256.update(data)
    return sha256.hexdigest()

def svgNameToJSON(dir_path):
    # enumerate all files in dir_path, key: sha256 of file value: file_name
    ret_obj = {}
    for file in os.listdir(dir_path):
        p = os.path.join(dir_path,file)
        p = p.replace("\\","/")
        (filepath,tempfilename) = os.path.split(p)
        (fn,ft) = os.path.splitext(tempfilename)
        ret_obj[fileToSHA256(p)] = fn
    return ret_obj


def dirToJSON(dir_path,dir_obj={}):
    for x in os.listdir(dir_path):
        p = os.path.join(dir_path,x)
        p = p.replace("\\","/")
        if os.path.isdir(p):
            dir_obj[x] = {"type":'dir','contents':{}}
            dirToJSON(p,dir_obj[x]["contents"])
        else:
            rid = fileToSHA256(p)
            (filepath,tempfilename) = os.path.split(p)
            (fn,ft) = os.path.splitext(tempfilename)
            np = f'{filepath}/{rid}{ft}'
            os.rename(p,np)
            p = np
            p = p[6:]#strip public
            dir_obj[rid] = {
                'filepath':p,
                'type':'file'
            }
    return dir_obj

name_obj = svgNameToJSON("public/assets/name_svg")
dir_obj = dirToJSON("public/thua")
path_info = json.dumps(dir_obj,ensure_ascii=False,indent=2)
name_info = json.dumps(name_obj,ensure_ascii=False,indent=2)

var_name = 'pathInfo'
svg_name = 'nameInfo'

with open("path.config.js","wb+") as fp:
    fp.write(
        f'''//This file was auto generated, DO NOT EDIT.\n\nexport const {svg_name} = {name_info};\n\nconst {var_name} = {path_info};\n\nexport default {var_name};'''.encode('utf-8')
)