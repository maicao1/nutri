pacientes.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(){
        this.remove();
    })
});