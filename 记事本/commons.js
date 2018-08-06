var d1 = document.getElementById('d1');
if(d1.innerHTML === ""){
    var ul = document.createElement('ul');
    ul.id = 'toDo';
    d1.appendChild(ul);
}
var d2 = document.getElementById('d2');
if(d2.innerHTML === ""){
    var ol = document.createElement('ol');
    ol.id = "done";
    d2.appendChild(ol);
}
var btn = document.getElementById('btn');          //添加待办事项按钮
var content = document.getElementById('content');  //input框
var toDoNum = document.getElementById('toDoNum');  //待办数目
var doneNum = document.getElementById('doneNum');  //完成数目
var todo_count = 0;
var done_count = 0;
btn.onclick = function(){
    var li = document.createElement('li');
    li.innerHTML = "<button class='add-to-done'>&nbsp;</button><p>" + content.value + "</p><button class='del'>x</button>";
    var lis = ul.children;    //待办下的li
    var ols = ol.children;    //已完成下的li
    if( content.value !== ''){
        ul.insertBefore(li,lis[0]);
        todo_count++;
        toDoNum.innerText = todo_count;  //<!--未完成便签内容-->
        content.value = '';
    }else{
        alert('请输入内容');
    }

    //删除单个

    var delBtns = document.getElementsByClassName('del');
    for(var i=0;i<delBtns.length;i++){
        delBtns[i].onclick = function () {
            var oul = this.parentNode.parentNode; //<!--获取ul标签-->
            oul.removeChild(this.parentNode);  //<!--删除li-->
            if(oul.id === "toDo"){
                todo_count--;
                toDoNum.innerText = todo_count;  //<!--未完成便签内容-->
            }else{
                done_count--;
                doneNum.innerText = done_count;
            }
        }
    }
    //待办与已完成切换
    var dones = document.getElementsByClassName('add-to-done');
    for(var i=0;i<dones.length;i++){
        dones[i].onclick = function () {
            var parent_node = this.parentNode;   // li
            parent_node.parentNode.removeChild(parent_node);
            if(parent_node.firstChild.innertext === undefined){
                //待办添加到已完成
                parent_node.firstChild.innertext = "&#8730;";
                ol.insertBefore(parent_node,ols[0]);
                todo_count --;
                toDoNum.innerText = todo_count;  //未完成便签内容
                done_count ++;
                doneNum.innerText = done_count;  //已完成便签内容
            }else{
                //已完成添加到待办
                parent_node.firstChild.innertext = undefined;
                ul.insertBefore(parent_node,lis[0]);
                todo_count ++;
                toDoNum.innerText = todo_count;   // <!--未完成便签内容-->
                done_count --;
                doneNum.innerText = done_count;   // <!--已完成便签内容-->
            }
        }
    }
};
// 清空
var clear = document.getElementById('clear');
clear.onclick = function(){
    d1.removeChild(ul);
    d2.removeChild(ol);
    todo_count = 0;
    done_count = 0;
    toDoNum.innerText = todo_count;
    doneNum.innerHTML = done_count;

    create_ul();
    create_ol();
    };


function create_ul(){
    ul = document.createElement('ul');   //全局变量，给其他函数调用
    ul.id = 'toDo';
    d1.appendChild(ul);
    return ul;
}
function create_ol(){
    ol = document.createElement('ol');
    ol.id = "done";
    d2.appendChild(ol);
    return ol;
}
