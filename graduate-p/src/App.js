import logo from './logo.svg';
import './App.css';
import aside from './components/aside'
import body from './components/body'


function App() {
  return (


    <body>
<aside class="sidebar">
    <div class="avatar">
        <img src="static/img/avatar.jpg" title="保罗酱"/>
    </div>
    <nav class="nav">
        <a href="#info">profile</a>
        <a href="#skills">skill</a>
        <a href="#works">stuff</a>
        <a href="#story">expierence</a>
        <a href="#team">team</a>
    </nav>
</aside>
<main>
    <section id="info">
        <div class="wrap">
            <h2 class="title">profile</h2>
            <div class="row">
                <div class="col-l-4">
                    <p>name：XXX</p>
                    <p>gender：male</p>
                    <p>age：48</p>
                    <p>prefer name：</p>
                    <p>degree：</p>
                </div>
                <div class="col-l-4">
                    <p>QQ：XXX</p>
                    <p>GitHub：<a href="/">Moreduo</a></p>
                   
                    <p>Email:<a href="mailto:XXX@gmail.com">XXX@gmail.com</a></p>
                </div>
                <div class="col-l-4">
                </div>
            </div>
        </div>
    </section>
    <section id="skills">
        <div class="wrap">
            <h2 class="title">skill</h2>
            <div class="row scrollable">
                <div class="col-s-6 col-m-4 center-fixed">
                    <div class="skills-icon">
                        <i class="fa fa-html5"></i>
                    </div>
                    <div class="skills-title">
                        <h3>HTML 5</h3>
                        <p>soemthing </p>
                    </div>
                </div>
                <div class="col-s-6 col-m-4 center-fixed">
                    <div class="skills-icon">
                        <i class="fa fa-css3"></i>
                    </div>
                    <div class="skills-title">
                        <h3>CSS3</h3>
                        <p>soemthing</p>
                    </div>
                </div>
                <div class="col-s-6 col-m-4 center-fixed">
                    <div class="skills-icon">
                        <i class="fa fa-code"></i>
                    </div>
                    <div class="skills-title">
                        <h3>JavaScript</h3>
                        <p>soemthing</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="works">
        <div class="wrap">
            <h2 class="title">Stuff</h2>
            <div class="row">
                
              
            </div>
        </div>
    </section>
    <section id="story">
        <div class="wrap">
            <h2 class="title">expierence</h2>
            <div class="row">
                <div class="col-m-8">
                    <ul class="timeline">
   
                    </ul>
                </div>
              
            </div>
        </div>
    </section>
    <section class="content-d" id="team">
        <div class="wrap">
            <h2 class="title">team</h2>
            <div class="row">
                <div class="col-m-6">
               
                </div>

            </div>
        </div>
    </section>

</main>

</body>
  );
}

export default App;