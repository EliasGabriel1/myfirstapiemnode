# MinhaPrimeiraApiEmNode

Essa foi minha primeira api em node, carreguei algumas dificuldade e isso foi um desafio pessoal e profissional, a facilidade é que ja convivo com o js no meu dia a dia.

Separando por partes fiz uma validação rápida apenas no get, mas irei mostrar o código como fiz o create no sqlite com o post, get, delet e put.

##vendo dados do usuario 

![get usuario](https://user-images.githubusercontent.com/50595684/121610608-cf496e80-ca2c-11eb-8cb5-a3d5a24565c2.PNG)


Validação no postmant

![get usuarios postmant](https://user-images.githubusercontent.com/50595684/121610626-d5d7e600-ca2c-11eb-8697-64087911043b.PNG)


##Vendo dados das Fotos
![get fotos](https://user-images.githubusercontent.com/50595684/121610634-d96b6d00-ca2c-11eb-9918-359e6fad9f62.PNG)


Validação no postmant

![get Fotos postmant](https://user-images.githubusercontent.com/50595684/121610637-dd978a80-ca2c-11eb-8a79-cdfc4c97bc41.PNG)


#E seguindo de forma rapida, push, delete e put de cada um dos objetos levando para as tabelas no banco

![criar usuario](https://user-images.githubusercontent.com/50595684/121610670-eab47980-ca2c-11eb-83a8-f5834fe23744.PNG)

![Criar Fotos](https://user-images.githubusercontent.com/50595684/121610680-eee09700-ca2c-11eb-87ea-4992858de70a.PNG)

![deletar usuario id](https://user-images.githubusercontent.com/50595684/121610697-f43de180-ca2c-11eb-87df-19a440c78a76.PNG)

![Deletar Fotos](https://user-images.githubusercontent.com/50595684/121610705-f6a03b80-ca2c-11eb-8d70-b4ddc3e9380b.PNG)

![atualizar usuario](https://user-images.githubusercontent.com/50595684/121610720-0029a380-ca2d-11eb-8408-d99de037dd04.PNG)

![atualizar fotos](https://user-images.githubusercontent.com/50595684/121610728-03bd2a80-ca2d-11eb-8c38-df81e409ef64.PNG)



#Para validar mais a fundo usei o sqlite browser para ver os dados

![Banco de dados sqlite usando browser](https://user-images.githubusercontent.com/50595684/121610740-0ae43880-ca2d-11eb-958f-2988cfd28a75.PNG)



#Os modelos usados caso não tenha as tabela, ele cria automaticamente:


![Modelo Usuario](https://user-images.githubusercontent.com/50595684/121610747-10418300-ca2d-11eb-9462-efd47c1196e8.PNG)

![Modelo Fotos](https://user-images.githubusercontent.com/50595684/121610753-13d50a00-ca2d-11eb-85ca-b27aac3ef2e6.PNG)



Fiz um file chamado routes aonde setei algumas configurações


