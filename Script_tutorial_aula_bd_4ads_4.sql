create database Script_tutorial_aula_bd_4ads_4;
use Script_tutorial_aula_bd_4ads_4;

create table produtos(
	id int primary key auto_increment,
    nome varchar(100) null,
    preco decimal(10,2)
);

insert into produtos(nome, preco)
values('TV', 5000),
('Celular', 3000),
('Monitor',2500);

select * from produtos;

-- adicionar uma coluna
alter table produtos add estoque int;
alter table produtos add estoque int not null;
alter table produtos add estoque int not null default 1;

-- remover coluna
alter table produtos drop column estoque;

insert into produtos(preco, estoque)
values(55, 10);

alter table produtos modify nome varchar(100) not null;
alter table produtos modify nome varchar(100) null;


drop table produtos;

create table produtos(
	id int primary key auto_increment,
    nome varchar(100) null,
    preco decimal(10,2)
);

insert into produtos(nome, preco)
values('TV', 5000),
('Celular', 3000),
('Monitor',2500);

alter table produtos 
add constraint uq_produtos_nome unique(nome);

alter table produtos 
add constraint unique(preco);

alter table produtos modify column preco decimal(10,2);

-- remover unique
alter table produtos drop index preco;

insert into produtos(nome,preco)
values('TV2',5000);


-- Apaga os registros da tabela
truncate produtos;

alter table produtos add qtd int not null default 1;

-- modificando nome da coluna
alter table produtos RENAME COLUMN qtd TO quantidade;

-- MYSQL 5.7
alter table produtos CHANGE qtd quantidade int;

-- modificando nome da tabela
alter table produtos rename to itens;

select* from produtos; -- erro
select * from itens;


show tables;
describe produtos;
show create table produtos;

CREATE TABLE `produtos` (
   `pro_id` int(11) NOT NULL AUTO_INCREMENT,
   `pro_nome` varchar(180) NOT NULL,
   `pro_descricao` text DEFAULT NULL,
   `pro_preco` decimal(10,2) DEFAULT NULL,
   `pro_url` varchar(100) DEFAULT NULL,
   `pro_ativo` tinyint(1) DEFAULT NULL,
   `usu_id` int(11) NOT NULL,
   PRIMARY KEY (`pro_id`),
   KEY `usu_id` (`usu_id`),
   CONSTRAINT `produtos_ibfk_1` FOREIGN KEY (`usu_id`) REFERENCES `usuarios` (`usu_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- excluindo unique
show index from produtos;
-- localize o key_name
alter table produtos drop index key_name;

