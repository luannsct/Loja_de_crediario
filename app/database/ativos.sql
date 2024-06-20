DROP TABLE IF EXISTS "cadastrarNovoAtivo";

CREATE TABLE "cadastrarNovoAtivo" (
  id SERIAL PRIMARY KEY,
  dataCadastro varchar(255),
  responsavel varchar(255) default NULL,
  situacao boolean default TRUE,
  localizacao varchar(50) default NULL,
  numerochamado varchar(255),
  dataentrega varchar(255),
  datadevolucao varchar(255)
);

CREATE TABLE "equipamentos"(
  id SERIAL PRIMARY KEY,
  nomeequipamento varchar(255) not null,
  numeropatrimonio varchar(255) not null,
  tipoequipamento varchar(255)
)

INSERT INTO cadastrarNovoAtivo (dataCadastro,responsavel,situacao,localizacao,numberrange,dataEntrega,datadevolucao)
VALUES
  ('2024-03-06 20:04:50','Carissa Larson','true','SALA DE INFORMÁTICA','2593285868','01/29/2025','01/20/2024'),
  ('2024-07-20 01:22:13','Uriah Kerr','false','VARA DE EXECUÇÃO PENAL','2623631886','01/13/2025','06/20/2024'),
  ('2024-11-19 03:11:12','Charles Martinez','true','SALA DE INFORMÁTICA','9850359505','12/10/2024','06/29/2023'),
  ('2024-12-01 13:10:24','Ramona Cleveland','true','SALA DE INFORMÁTICA','3589512496','02/28/2024','04/08/2025'),
  ('2024-12-17 21:10:06','Deacon Moreno','true','SALA DE INFORMÁTICA','5250668390','09/26/2023','02/07/2024');
