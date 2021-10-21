# Cadastro de Carro
**RF**
Deve ser possivel cadastrar um novo carro.
 
**RN**
[X]Nao deve ser possivel cadastrar um carro com uma placa ja existente
[X]Nao deve ser possivel alterar a placa de uma carro ja cadastrado.
[X]O carro deve ser cadastrado com a disponibilidade por padrao.
[X]O usuario responsavel pelo cadastro deve ser um usuario administrador.

# Listagem de Carros
**RF**
[X]Deve ser possivel listar todos os carros disponiveis.
[X]Deve ser possivel listar todos os carros disponiveis pelo nome da categoria.
[X]Deve ser possivel listar todos os carros disponiveis pelo nome da marca.
[X]Deve ser possivel listar todos os carros disponiveis pelo nome do carro.

**RN**
[X]O usuario nao precisa esta logado no sistema.

# Cadatro de Especificacao no carro
**RF**
Deve ser possivel cadstrar uma especificacao para o carro.
Deve ser possivel listar todas as especificacoes.
Deve ser possivel listar todos os carros.

**RN**
Nao deve ser possivel cadastrar uma especificacao para um carro nao cadastrado.
Nao deve ser possivel cadastrar uma especificacao ja existente para o mesmo carro.
O usuario responsavel pelo cadastro deve ser um usuario administrador.


# Cadastro de imagens do Carro
**RF**
Deve ser possivel cadastrar a imagem do carro.
Deve ser possivel listar todos os carros.

**RFN**
Utilizar o Multer para upload dos arquivos

**RN**
Os usuarios devem poder cadastrar mais de uma imagem para o mesmo carro.
O usuario responsavel pelo cadastro deve ser um usuario administrador.

# Aluguel de carro
**RF**
Deve ser possivel cadastrar um aluguel.

**RN**
O aluguel deve ter duracao minima de 24 horas.
Nao deve ser possivel cadastrar uma novo aluguel caso ja exista um aberto para o mesmo usuario.
Nao deve ser possivel cadastrar uma novo aluguel caso ja exista um aberto para o mesmo carro.