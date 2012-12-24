import json

city_data = []
criteria_data = []

with open('data.csv', 'r') as f:
    data = [x for x in f]

    categories = [cat for cat in data[0].split(',') if cat]
    criteria = data[-1].split(',')[2:-6]

    criteria_counts = [23, 3, 16, 15, 6, 6, 13, 11, 2, 8, 20, 5]

    for row in data[2:-2]:
        cells = row.split(',')
        website = cells[0]
        city = cells[1]
        values = cells[2:-6]

        row_data = []

        count = 0
        for c in criteria_counts:
            row_data.append(values[count:count + c])
            count += c

        city_data.append({
            'name': city,
            'website': website,
            'data': row_data
        })

with open('data.json', 'w') as f:
    f.write(json.dumps(city_data))
