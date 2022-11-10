import './styles.css';
export function UpPage(){
       return ( 
       
            <div className="container">
        
            <nav> 
                 <a className="logo" href="/">Cristalyze</a> 
    
                <div className="mobile-menu">
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
    
                <ul className="nav-list">
                    <li> <a href="/">Dashboards</a> </li>
                    <li> <a href="/">Relatórios</a> </li>
                    <li> <a href="/">Recentes</a> </li>
                    <li> <a href="/">Contatos</a> </li>
                </ul>
    
               <div className="animated-btn">
                <button>Entrar</button>
                <button>Criar conta</button>
               </div>
            </nav>
          
        
        <script src='./main.js'></script>
      </div>
       )
}