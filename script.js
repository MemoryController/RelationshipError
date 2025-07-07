// 获取按钮和输入框组容器
const addGroupBtn = document.getElementById('add-group-btn');
const inputGroups = document.getElementById('input-groups');

// 点击添加按钮，创建新的输入框组
addGroupBtn.addEventListener('click', () => {
    const newGroup = document.createElement('div');
    newGroup.classList.add('input-group');

    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.placeholder = '事件';
    input1.classList.add('event-chain-content');

    const input2 = document.createElement('input');
    input2.type = 'text';
    input2.placeholder = '时间';
    input2.classList.add('event-chain-time');

    newGroup.appendChild(input1);
    newGroup.appendChild(input2);
    inputGroups.appendChild(newGroup);
});


// 生成报错的函数
function generateException(){
    const outputField = document.getElementById('output');

    outputField.value += 'Exception in time \"' +
        document.getElementById('main-event-time').value+'\" ' +
        document.getElementById('main-event-content').value+' : '+
        document.getElementById('main-event-detail').value + '\n';

    let groups = document.getElementsByClassName('input-group');
    for (let i = 1 ; i < groups.length ; i++){
        // 遍历事件链
        let content = groups[i].children[0].value;
        let time = groups[i].children[1].value;
        if (content !== '' || time !== ''){
            // 防止出现空的
            outputField.value += '    at ' + content +'('+time+')\n';

        }
    }



}
document.getElementById('generate-btn').addEventListener('click',generateException); // 添加事件监听