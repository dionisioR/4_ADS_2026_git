-- 01
drop database oficina_nome_aluno;

create database oficina_nome_aluno;
use oficina_nome_aluno;

CREATE TABLE clientes (
  id_cliente INT PRIMARY KEY auto_increment,
  nome VARCHAR(80) NOT NULL,
  telefone VARCHAR(20),
  cidade VARCHAR(60)
)engine=innoDB;
 
CREATE TABLE veiculos (
  id_veiculo INT PRIMARY KEY auto_increment,
  id_cliente INT NOT NULL,
  marca VARCHAR(40) NOT NULL,
  modelo VARCHAR(50) NOT NULL,
  ano SMALLINT NOT NULL,
FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
)engine=innoDB;
 
CREATE TABLE mecanicos (
  id_mecanico INT PRIMARY KEY auto_increment,
  nome VARCHAR(80) NOT NULL,
  especialidade VARCHAR(60) NOT NULL
)engine=innoDB;

CREATE TABLE ordens_servico (
  id_os INT PRIMARY KEY auto_increment,
  id_veiculo INT NOT NULL,
  id_mecanico INT NOT NULL,
  data_abertura DATE NOT NULL,
  descricao VARCHAR(120) NOT NULL,
  status VARCHAR(20) NOT NULL,
  valor_estimado DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (id_veiculo) REFERENCES veiculos(id_veiculo),
  FOREIGN KEY (id_mecanico) REFERENCES mecanicos(id_mecanico)
)engine=innoDB;

-- --------------------------------------------
INSERT INTO clientes (id_cliente,nome,telefone,cidade) VALUES
(1,'Ana Souza','11911110001','São Paulo'),
(2,'Bruno Lima','19922220002','Campinas'),
(3,'Carla Mendes','13933330003','Santos'),
(4,'Diego Rocha','11944440004','São Paulo');

select * from clientes;

INSERT INTO veiculos (id_veiculo,id_cliente,marca,modelo,ano) VALUES
(101,1,'Toyota','Corolla',2018),
(102,2,'Honda','Civic',2020),
(103,3,'Fiat','Argo',2022),
(104,4,'Toyota','Yaris',2019);

select * from veiculos;

INSERT INTO mecanicos (id_mecanico,nome,especialidade) VALUES
(201,'Marcos Silva','Motor'),
(202,'Julia Costa','Freios'),
(203,'Paulo Nunes','Elétrica');

select * from mecanicos;

INSERT INTO ordens_servico
(id_os,id_veiculo,id_mecanico,data_abertura,descricao,status,valor_estimado) VALUES
(1001,101,201,'2026-10-01','Revisão do motor','Aberta',1200.00),
(1002,102,202,'2026-10-02','Troca de pastilhas de freio','Em andamento',650.00),
(1003,103,203,'2026-10-03','Diagnóstico da bateria','Aberta',300.00),
(1004,104,202,'2026-10-04','Alinhamento e balanceamento','Concluída',450.00),
(1005,102,201,'2026-10-05','Troca de óleo','Aberta',380.00);

select * from ordens_servico;

-- --------------------------------------------
-- 02
SELECT c.nome, os.status
FROM clientes AS c
JOIN veiculos AS v ON v.id_cliente = c.id_cliente
JOIN ordens_servico AS os ON os.id_veiculo = v.id_veiculo
WHERE c.nome = 'Carla Mendes';
 
-- --------------------------------------------
-- 03
ALTER TABLE ordens_servico
ADD COLUMN prioridade VARCHAR(12) NOT NULL DEFAULT 'Normal';

select * from ordens_servico;

-- --------------------------------------------
-- 04
SELECT c.nome, v.modelo, os.descricao
FROM clientes AS c
JOIN veiculos AS v ON v.id_cliente = c.id_cliente
JOIN ordens_servico AS os ON os.id_veiculo = v.id_veiculo
WHERE os.id_os = 1002;

-- --------------------------------------------
-- 05
SELECT m.nome AS mecanico, os.descricao, v.ano
FROM mecanicos AS m
JOIN ordens_servico AS os ON os.id_mecanico = m.id_mecanico
JOIN veiculos AS v ON v.id_veiculo = os.id_veiculo
WHERE os.status = 'Aberta'
ORDER BY os.id_os;

-- --------------------------------------------
-- 06
UPDATE ordens_servico AS os
JOIN veiculos AS v ON v.id_veiculo = os.id_veiculo
SET os.prioridade = 'Urgente'
WHERE v.marca = 'Toyota' AND os.status = 'Aberta';

-- --------------------------------------------
-- 07
DELETE FROM ordens_servico
WHERE status = 'Concluída' AND valor_estimado < 500;

-- --------------------------------------------
-- 08
SELECT c.nome AS cliente, v.modelo, m.nome AS mecanico, os.prioridade
FROM clientes AS c
JOIN veiculos AS v ON v.id_cliente = c.id_cliente
JOIN ordens_servico AS os ON os.id_veiculo = v.id_veiculo
JOIN mecanicos AS m ON m.id_mecanico = os.id_mecanico;


-- ou 
SELECT c.nome AS cliente, v.modelo, m.nome AS mecanico, os.prioridade
FROM clientes AS c
JOIN veiculos AS v ON v.id_cliente = c.id_cliente
JOIN ordens_servico AS os ON os.id_veiculo = v.id_veiculo
JOIN mecanicos AS m ON m.id_mecanico = os.id_mecanico
ORDER BY os.id_os;
