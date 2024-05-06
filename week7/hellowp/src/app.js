import $ from 'jquery';
import photo1 from './assets/DSC01049.JPG';
import html from './index.html';
import styles from "./css/styles.css";

$(function(){
    $('#intro').html("hello webpack");
    console.log(photo1);
    $('#photo').html(`<img src=${photo1}>`);
});