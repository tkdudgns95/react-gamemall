const continents = [
    {
        "_id": 1,
        "name": "RPG"
    },
    {
        "_id": 2,
        "name": "액션"
    },
    {
        "_id": 3,
        "name": "어드벤처"
    },
    {
        "_id": 4,
        "name": "전략"
    },
    {
        "_id": 5,
        "name": "스포츠"
    },
    {
        "_id": 6,
        "name": "공포"
    },
    {
        "_id": 7,
        "name": "레이싱"
    }

]

const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "$0 to $20",
        "array": [0, 20]
    },
    {
        "_id": 2,
        "name": "$20 to $40",
        "array": [20, 40]
    },
    {
        "_id": 3,
        "name": "$40 to $60",
        "array": [40, 60]
    },
    {
        "_id": 4,
        "name": "$60 to $80",
        "array": [60, 80]
    },
    {
        "_id": 5,
        "name": "$80 이상",
        "array": [80, 1500000]
    }
]




export {
    continents,
    price
}
