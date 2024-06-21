DROP TABLE IF EXISTS 'LOJA_CREDIARIO';
CREATE TABLE "usuario"(
  id SERIAL PRIMARY KEY,
  nome varchar(100),
  email varchar(100) unique,
  senha text,
  dataCadastro timestamp,
  permissao int default 1
);

CREATE TABLE "loja"(
  id SERIAL PRIMARY KEY,
  cnpj varchar(45) not null unique,
  nomefantasia varchar(100) not null,
  usuarioid int not null,
  foreign key(usuarioid) references usuario(id)
);

CREATE TABLE "endereços"(
  id SERIAL PRIMARY KEY,
  RUA VARCHAR(100),
  NUMERO VARCHAR(12),
  COMPLEMENTO VARCHAR(100),
  BAIRRO VARCHAR(45),
  CIDADE VARCHAR(100),
  ESTADO VARCHAR(100),
  CEP VARCHAR(45) NOT NULL,
  USUARIOID INT NOT NULL,
  FOREIGN KEY(USUARIOID) REFERENCES usuario(id)
);