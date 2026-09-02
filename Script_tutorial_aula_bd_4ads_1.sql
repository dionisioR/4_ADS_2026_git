create database tutorial_aula_bd_4ads_1;
use tutorial_aula_bd_4ads_1;

create table departamento(
	id int primary key auto_increment,
    nome varchar(80),
    descricao text
)engine=InnoDB;

create table funcionario(
	id int primary key auto_increment,
    nome varchar(100),
    salario decimal(8,2),
    data date,
    departamento_id int not null,
    foreign key (departamento_id) references departamento(id)
)engine=InnoDB;


select * from departamento;	
select * from funcionario;


insert into departamento(nome, descricao)
values ('TI', 'Departamento de Tecnologia da Informação'),
('RH', 'Departamento de Gestão de Pessoas'),
('Vendas','Departamento Comercial');

select * from departamento;

insert into funcionario(nome, salario, data, departamento_id)
values
('Rodrigo Silva', 5000, '2026-09-01',1),
('Maria Oliveira', 5500, '2026-08-01',2),
('João Ferreira', 6000, '2026-09-01',3),
('Ana Mendes', 6500, '2026-08-01',1),
('Carlos Gomes', 7000, '2026-09-01',2);

select * from funcionario;
select * from departamento;
select nome from departamento;
select nome, descricao from departamento;
select descricao from departamento;

select * from funcionario where salario > 6000;

select f.nome, d.nome 
from funcionario f 
inner join departamento d
on f.departamento_id = d.id;

select f.nome, f.salario, f.data, d.nome 
from funcionario f 
inner join departamento d
on f.departamento_id = d.id;


select f.nome, f.salario, f.data, d.nome 
from funcionario f 
inner join departamento d
on f.departamento_id = d.id 
where f.salario > 6000;



