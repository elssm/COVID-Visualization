import requests
import csv
import pandas as pd
import json
def world():
    url='https://api.inews.qq.com/newsqa/v1/automation/foreign/country/ranklist'
    r = requests.get(url)
    res=r.json()
    res=res['data']
    flag=True
    csvfile = open('world.csv', 'a', newline='')
    writer = csv.writer(csvfile, delimiter='\t', quoting=csv.QUOTE_ALL)
    with open("world.csv", "r", newline="") as f:
        reader=csv.reader(f)
        if not [row for row in reader]:
            for i in range(len(res)):
                if flag:
                    keys = list(res[i].keys())
                     # 获取属性列表
                    writer.writerow(keys) # 将属性列表写入csv中
                    flag=False
                 # 读取json数据的每一行，将values数据一次一行的写入csv中
                writer.writerow(list(res[i].values()))
            csvfile.close()
        else:
            for i in range(len(res)):
                writer.writerow(list(res[i].values()))
            csvfile.close()
    print("已保存至world.csv...")


def china_province():
    # url='https://i.snssdk.com/forum/home/v1/info/?activeWidget=1&forum_id=1656784762444839'
    url = 'http://api.tianapi.com/txapi/ncovcity/index?key=964dc226dd5b57e892e6199735b6c55f'
    r = requests.get(url)
    res=r.json()
    res=res['newslist']
    for i in res:
        del i['cities']
        del i['comment']
        del i['provinceName']
    flag = True
    csvfile = open('province.csv', 'a', newline='')
    writer = csv.writer(csvfile, delimiter='\t', quoting=csv.QUOTE_ALL)
    with open("province.csv", "r", newline="") as f:
        reader = csv.reader(f)
        if not [row for row in reader]:
            for i in range(len(res)):
                if flag:
                    keys = list(res[i].keys())
                    # 获取属性列表
                    writer.writerow(keys)  # 将属性列表写入csv中
                    flag = False
                # 读取json数据的每一行，将values数据一次一行的写入csv中
                writer.writerow(list(res[i].values()))
            csvfile.close()
        else:
            for i in range(len(res)):
                writer.writerow(list(res[i].values()))
            csvfile.close()
    print("已保存至province.csv...")


def global_list():
    url="https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoGlobalStatis,FAutoContinentStatis,FAutoGlobalDailyList,FAutoCountryConfirmAdd"
    r = requests.get(url)
    res = r.json()
    res = res['data']['FAutoGlobalDailyList']
    # print(type(res[0]['date']))
    # print(res[0]['all'])
    flag = True
    csvfile = open('global_list.csv', 'a', newline='')
    writer = csv.writer(csvfile, delimiter='\t', quoting=csv.QUOTE_ALL)
    with open("global_list.csv", "r", newline="") as f:
        reader = csv.reader(f)

        if not [row for row in reader]:
            for i in range(len(res)):
                if flag:
                    key1 = list(res[i].keys())[0:-1]
                    key2 = list(res[i]['all'].keys())
                    for j in key2:
                        key1.append(j)
                    # 获取属性列表
                    writer.writerow(key1)  #key1 将属性列表写入csv中
                    flag = False
        #         # 读取json数据的每一行，将values数据一次一行的写入csv中
                v1=list(res[i].values())[0:-1]
                v2=list(res[i]['all'].values())
                for i in v2:
                    v1.append(i)
                writer.writerow(v1)
            csvfile.close()
        else:
            for i in range(len(res)):
                v1 = list(res[i].values())[0:-1]
                v2 = list(res[i]['all'].values())
                for i in v2:
                    v1.append(i)
                writer.writerow(v1)
            csvfile.close()
    print("已保存至global_list.csv...")

def hero_first():
    url='https://eyesight.news.qq.com/sars/toheros'
    r = requests.get(url)
    # print(r)
    res = r.json()
    res = res['data']['allHeros']
    print(res)
    csvfile = open('hero.csv', 'w', newline='')
    writer = csv.writer(csvfile, delimiter='\t', quoting=csv.QUOTE_ALL)
    flag = True
    for i in range(len(res)):
        if flag:
            keys = list(res[i].keys())
            #         # 获取属性列表
            writer.writerow(keys)  # 将属性列表写入csv中
            flag = False
        #     # 读取json数据的每一行，将values数据一次一行的写入csv中
        writer.writerow(list(res[i].values()))
    csvfile.close()

def china_cities():
    url = 'http://api.tianapi.com/txapi/ncovcity/index?key=964dc226dd5b57e892e6199735b6c55f'
    r=requests.get(url)
    res=r.json()
    res=res['newslist']
    flag = True
    csvfile = open('china_cities.csv', 'a', newline='')
    writer = csv.writer(csvfile, delimiter='\t', quoting=csv.QUOTE_ALL)
    with open("china_cities.csv", "r", newline="") as f:
        reader = csv.reader(f)
        if not [row for row in reader]:
        # print(res)
            for i in res:
                if i['cities']==[]:
                    continue
                else:
                    for j in i['cities']:
                        # print(j)
                        if flag:
                            keys = list(j.keys())
                            print(keys)
                            flag=False
                            writer.writerow(keys)  # keys 将属性列表写入csv中
                        v = list(j.values())
                        # print(v)
                        writer.writerow(v)
            csvfile.close()
        else:
            for i in res:
                if i['cities']==[]:
                    continue
                else:
                    for j in i['cities']:
                        v = list(j.values())
                        # print(v)
                        writer.writerow(v)
            csvfile.close()
    print("已保存至china_cities.csv...")

import re
def loads_jsonp(_jsonp):
    try:
        return json.loads(re.match(".*?({.*}).*",_jsonp,re.S).group(1))
    except:
        raise ValueError('Invalid Input')

def china_cities_all():
    url = 'https://voice.baidu.com/newpneumonia/get?target=trend&isCaseIn=0&stage=publish&callback=jsonp_1608368713132_18169'
    r = requests.get(url).text
    res = loads_jsonp(r)
    # print(res['data'][0]['name'])
    print(len(res['data']))
    for j in range(len(res['data'])):
        temp=res['data'][j]['trend']
        print(temp)
    # for i in res['list']:
    #     print(i)
        list1 = temp['updateDate']
        list2 =temp['list'][0]['data']
        list3 = temp['list'][1]['data']
        list4 = temp['list'][2]['data']
        list5 = temp['list'][3]['data']

        pd.DataFrame({'日期': list1, '确诊': list2, '治愈': list3, '死亡': list4, '新增确诊': list5}).to_csv(res['data'][j]['name']+'.csv', index=False)


def read_global_list():
    res=[]
    res1=[]
    s = pd.read_csv('global_list.csv',sep='\t')
    # print(s)
    print(s['date'])
    for i in s['date']:
        res.append(i)
    for i in s['confirm']:
        res1.append(i)
    print(res)
    print(res1)
if __name__ == '__main__':
    # read_global_list()
    china_province()
    global_list()
    world()
    china_cities()
    # china_cities_all()