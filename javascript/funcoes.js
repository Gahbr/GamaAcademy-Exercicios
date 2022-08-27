
$(function(){
    var operacao = "A" //"A" adição de registros "E" - edição de registros 
    var tbClientes = localStorage.getItem("tbClientes");

    tbClientes = JSON.parse(tbClientes) // Permite converter uma string em objeto JSON
    
    if(tbClientes == null){ // Caso não haja um conteúdo, iniciamos um vetor vazio
        tbClientes = [];
    }
        //Criando uma função para adicionar registros
        function Adicionar (){
            var cli  = GetCliente("Codigo", $("txtCodigo").val()); //Variável utilizada para verificar um código
            alert("passo")
            if(cli != null){
                alert("Código já cadastrado")
                return;
            }

            var cliente = JSON.stringify({
                Codigo: $("txtCodigo").val(),
                Nome :$("txtNome").val(),
                Telefone : $("txtTelefone").val(),
                Email : $("txtEmail").val(),
                DtCad : $("txtDataCadastro").val(),
            });

            tbClientes.push(cliente);
            localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
            alert("Registro adicionado")
            return true;
         }

         //Funcao para listar os clientes
         function Listar(){
            $("tbListar").html("");
            $("#tbListar").html(
                "<thead>"+
                "<tr>"+
                "<th></th>" +
                    "<th>Código</th>"+
                    "<th>Nome</th>"+
                    "<th>Telefone</th>"+
                    "<th>Email</th>"+
                    "<th>Data de Cadastro</th>"+
                    "</tr>" +
                    "</thead>"+
                    "</tbody>"+
                    "</tbody>"
                    
            );

            //Malha de repetição para inserir todos os registros
            for( var i in tbClientes){
                var cli = JSON.parse(tbClientes[i]);
                "<td><img src='images/edit.png alt '"+i+"' class='btnEditar'/> <img src='images/delete.png alt '"+i+"' class='btnExcluir'/></td>"
                "<td>"+cli.Codigo + "</td>"+
                "<td>"+cli.Nome + "</td>"+
                "<td>"+cli.Telefone + "</td>"+
                "<td>"+cli.Email + "</td>"+
                "<td>"+cli.DtCad + "</td>"+
                "</tr>"
                
            }
         }
})