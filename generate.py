import os
import json
import hashlib

def dirToJSON(dir_path,dir_obj={}):
    for x in os.listdir(dir_path):
        p = os.path.join(dir_path,x)
        p = p.replace("\\","/")
        if os.path.isdir(p):
            dir_obj[x] = {"type":'dir','contents':{}}
            dirToJSON(p,dir_obj[x]["contents"])
        else:
            stat = os.stat(p)
            rid = hashlib.sha256((str(stat.st_ino)+str(stat.st_uid)+str(stat.st_gid)).encode()).hexdigest()
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

dir_obj = dirToJSON("public/thua")

path_info = json.dumps(dir_obj,ensure_ascii=False,indent=2)

var_name = 'pathInfo'

with open("path.config.js","wb+") as fp:
    fp.write(
        f'''//This file was auto generated, DO NOT EDIT.\n\nconst {var_name} = {path_info};\n\nexport default {var_name};'''.encode('utf-8')
)