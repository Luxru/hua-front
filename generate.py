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
            fn,ft = os.path.basename(p).split('.')
            np = f'{os.path.dirname(p)}/{fn[:10]}.{ft}'
            os.rename(p,np)
            p = np
            p = p[6:]
            dir_obj[fn[:10]] = p
    return dir_obj

dir_obj = dirToJSON("public/thua")

path_info = json.dumps(dir_obj,ensure_ascii=False,indent=2)

var_name = 'pathInfo'

with open("path.config.js","wb+") as fp:
    fp.write(
        f'''//This file was auto generated, DO NOT EDIT.\n\nconst {var_name} = {path_info};\n\nexport default {var_name};'''.encode('utf-8')
)