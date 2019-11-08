/* 创建数据库 */
SET NAMES UTF8;
DROP DATABASE IF EXISTS dr;
CREATE DATABASE offce CHARSET=UTF8;
/* 创建登录表 */
use offce;
CREATE TABLE offce_login(
    id INT PRIMARY KEY
    AUTO_INCREMENT,
    uname VARCHAR(50),
    upwd VARCHAR(32)
    phone VARCHAR(16)
);
INSERT INTO offce_login VALUES (null,"tom",md5("123"),'13501234567');
INSERT INTO offce_login VALUES (null,"jerry",md5("456"),'13501234569');