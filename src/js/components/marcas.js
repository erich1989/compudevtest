import acer from '../../images/marcas/acer.png';
import asus from '../../images/marcas/asus.png';
import lenovo from '../../images/marcas/lenovo.png';
import amd from '../../images/marcas/amd.png';
import vaio from '../../images/marcas/vaio.png';
import hp from '../../images/marcas/hp.png';
import dell from '../../images/marcas/dell.png';
import windows from '../../images/marcas/windows.png';
import apple from '../../images/marcas/apple.png';
import intel from '../../images/marcas/intel.png';

const logosMarcas = () => {
    document.getElementById('marcas').innerHTML = `
        <div class="container p-5">
            <div class="row">
                <div class="text-center col-12 p-4">
                    <h2>Todas las marcas</h2>
                </div>
                <div class="col-12 text-center">
                    <img src=${acer}  class="logosmarcas mr-3" alt="logo acer">
                    <img src=${asus}  class="logosmarcas mr-3" alt="logo asus">
                    <img src=${amd}  class="logosmarcas mr-3" alt="logo amd">
                    <img src=${vaio}  class="logosmarcas mr-3" alt="logo vaio">
                    <img src=${lenovo}  class="logosmarcas" alt="logo lenovo">   
                </div>
                <div class="col-12 text-center">
                    <img src=${hp}  class="logosmarcas-dos mr-3 d-none d-md-inline" alt="logo hp">
                    <img src=${dell}  class="logosmarcas-dos mr-3 d-none d-md-inile" alt="logo dell">
                    <img src=${windows}  class="logosmarcas-dos mr-3 d-none d-md-inline" alt="logo windows">
                    <img src=${apple}  class="logosmarcas-dos mr-3 d-none d-md-inline" alt="logo vaio">
                    <img src=${intel}  class="logosmarcas-dos d-none d-md-inline" alt="logo lenovo">   
                </div>
            </div>
        </div>    
    `
} 

export default logosMarcas;