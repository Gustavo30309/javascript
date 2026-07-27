function adicionarTarefa() {
        //recebe valor do input do usuário
            let inputTarefa = document.getElementById("inputTarefa")
            let tarefa = inputTarefa.value.trim()
            let mensagem = document.getElementById("mensagem")

                if (tarefa == "") {
                    let mensagemErro = "Digite uma tarefa para adiciona-lá a sua lista!"
                    mensagem.textContent = mensagemErro ;
                } else{
                    //mensagem de tarefa adiocionada com sucesso
                    let mensagemSucesso = "Tarefa adicionada com sucesso!";
                    mensagem.textContent = mensagemSucesso;
            //criar novoitem(li) e inserir na (lista ul)
            const listaTarefas = document.getElementById("listaTarefas")
            let novaTarefa = document.createElement("li")
            novaTarefa.textContent = tarefa
            listaTarefas.appendChild(novaTarefa)
                }

        //limpa o input do usuário
        inputTarefa.value = ""



            


    }