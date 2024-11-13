$(document).ready(function() {
    // Adicionar nova tarefa
    $('#add-task').click(function() {
        var taskText = $('#new-task').val().trim();

        if (taskText) {
            var newTask = $('<li>').text(taskText);
            
            // Criar botão de remover
            var removeButton = $('<button>')
                .text('Remover')
                .addClass('remove')
                .click(function() {
                    $(this).parent().remove();
                });

            // Criar botão para marcar como concluído
            var completeButton = $('<button>')
                .text('Concluída')
                .click(function() {
                    $(this).parent().toggleClass('completed');
                });

            // Adicionar os botões à tarefa
            newTask.append(completeButton).append(removeButton);

            // Adicionar a nova tarefa à lista
            $('#task-list').append(newTask);

            // Limpar o campo de entrada
            $('#new-task').val('');
        }
    });

    // Adicionar tarefa pressionando "Enter"
    $('#new-task').keypress(function(event) {
        if (event.which === 13) {
            $('#add-task').click();
        }
    });
});