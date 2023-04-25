import os
import json

def dirToJSON(dir_path,dir_obj={}):
    for x in os.listdir(dir_path):
        p = os.path.join(dir_path,x)
        p = p.replace("\\","/")
        if os.path.isdir(p):
            dir_obj[x] = {}
            dirToJSON(p,dir_obj[x])
        else:
            p = p[6:]
            dir_obj[x] = p
    return dir_obj

dir_obj = dirToJSON("public/thua")

path_info = json.dumps(dir_obj,ensure_ascii=False,indent=2)


with open("path.config.js","wb+") as fp:
    fp.write(
        f'''//This file was auto generated, DO NOT EDIT.\n\nconst pathInfo = {path_info};\n\nexport default pathINFO;'''.encode('utf-8')
)