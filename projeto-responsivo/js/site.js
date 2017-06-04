Modernizr.load([
    {
        // Se estiver na resolução de um celular, retorna TRUE.
        test: Modernizr.mq('only screen and (max-width: 480px)'),
        
        // Retornando TRUE, carrega o jQuery.
        yep: 'js/jquery-2.0.0.min.js',
        
        // O jQuery foi carregado?
        callback: function () {
            
            // Carrega o Plugin
            Modernizr.load({
                load: 'js/jquery.mobilemenu.js',
                callback: function() {
                    
                    // Ativa o plugin
                    $(document).ready(function(){
                        $('#menu').mobileMenu({
                            defaultText: 'Menu'
                        });
                    });
                    
                }                
            });            
        }
    }    
]);