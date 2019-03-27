/**
 * 根据id属性的值，返回对应的标签元素
 * @param id   id属性的值，String类型的
 * @returns {HTMLElement | null}  元素对象
 */
function my$(id){
    return document.getElementById(id);
}