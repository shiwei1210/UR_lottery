var lottery_initial_datas =[
    {
        "nameen": "avatar1",
        "namezh": "蒋勇",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar2",
        "namezh": "于桂英",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar3",
        "namezh": "徐超",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar4",
        "namezh": "孙秀兰",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar5",
        "namezh": "张娟",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar6",
        "namezh": "潘秀兰",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar7",
        "namezh": "任伟",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar8",
        "namezh": "何刚",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar9",
        "namezh": "万艳",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar10",
        "namezh": "田秀英",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar11",
        "namezh": "崔伟",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar12",
        "namezh": "朱秀兰",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar13",
        "namezh": "金静",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar14",
        "namezh": "韩伟",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar15",
        "namezh": "邹勇",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar16",
        "namezh": "许强",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar17",
        "namezh": "赵杰",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar18",
        "namezh": "孟明",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar19",
        "namezh": "杨平",
        "wish": "运营一部"
        },
        {
        "nameen": "avatar20",
        "namezh": "史敏",
        "wish": "运营一部"
        }
];

var award_config = {
    "award01": 1,
    "award02": 3,
    "award03": 6,
    "award04": 20
};

// 初始化数据
if (!localStorage.getItem('lottery_initial')) {
    var data_str = JSON.stringify(lottery_initial_datas);
    localStorage.setItem('lottery_initial', data_str);
}
if (!localStorage.getItem('award_initial')) {
    var award_str = JSON.stringify(award_config);
    localStorage.setItem('award_initial', award_str);
}