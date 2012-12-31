import json

city_data = []
criteria_data = []

city_meta = {}
with open('citymeta.json', 'r') as fp:
    raw = json.load(fp, encoding='utf-8')
    # have to clean up the encoding of the dict keys
    for k, v in raw.items():
        city_meta[unicode(k).encode('utf-8')] = v


with open('data.csv', 'r') as f:
    data = [x for x in f]

    categories = [cat for cat in data[0].split(',') if cat]
    criteria = data[-1].split(',')[2:-6]

    criteria_counts = [6, 9, 6, 3, 7, 3, 5, 15, 5, 5, 5, 6, 2, 8, 3, 2, 8, 7, 13, 4]

    cur_cat = None
    cur_fields = []
    pairs = zip(data[0].split(','), data[1].split(','))[2:]
    for cat, field in pairs:
        if cat and cat != cur_cat:
            if cur_cat:
                criteria_data.append({
                    'category': cur_cat,
                    'fields': cur_fields,
                })
            cur_cat = cat
            cur_fields = []
        cur_fields.append(field)
    criteria_data.append({
        'category': cur_cat,
        'fields': cur_fields,
    })

    for row in data[2:]:
        cells = row.split(',')
        website = cells[0]
        city = unicode(cells[1].decode('utf-8')).encode('utf-8')
        values = cells[2:]

        row_data = []

        count = 0
        for c in criteria_counts:
            row_data.append(values[count:count + c])
            count += c

        city_data.append({
            'name': city,
            'id': city_meta[city]['id'],
            'coordinates': city_meta[city]['coordinates'],
            'website': website,
            'data': row_data
        })

with open('data.json', 'wb') as fp:
    json.dump(city_data, fp, indent=4, ensure_ascii=False)

with open('guide.json', 'wb') as fp:
    json.dump(criteria_data, fp, indent=4, ensure_ascii=False)
