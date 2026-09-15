create database tutorial_aula_bd_4ads_3;
use tutorial_aula_bd_4ads_3;
 
drop table teste;

create table teste(
	id int primary key auto_increment,
    nome varchar(20) not null,
    sobrenome varchar(20) null,
    ativo boolean not null default true,
    idade int unsigned not null,
    cpf char(14) not null unique,
    desconto tinyint not null check( desconto between 0 and 100)
);

insert into teste(nome, sobrenome, ativo, idade, cpf, desconto)
value('FATEC', 'Guaratinguetá', false, 11, '111.111.111-11', -10);

insert into teste(nome, sobrenome, ativo, idade)
value('FATEC', 'Guaratinguetá', true, -11);

insert into teste(nome, sobrenome)
value('FATEC', 'Guaratinguetá');

insert into teste(nome)
value('FATEC2');

select * from teste;

create table cliente(
  id int auto_increment primary key,
  nome varchar(20) not null
)engine=InnoDB;

insert into cliente(nome)
values('Ana Maria');

insert into cliente(nome)
values('João Carlos');

select * from cliente;

create table contato(
	id int primary key auto_increment,
    telefone varchar(20),
    id_cliente int not null,
    foreign key (id_cliente) references cliente(id)
)engine=InnoDB;

insert into contato(telefone, id_cliente)
values('1234-5678', 1), ('9874-5654',1), ('6545-9632', 2);

select * from contato;

SELECT 
    cli.nome, con.telefone
FROM
    cliente cli
        INNER JOIN
    contato con ON con.id_cliente = cli.id;




