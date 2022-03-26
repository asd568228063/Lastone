import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
   <aside class="sidebar">
    <div class="avatar">
        <img src="static/img/avatar.jpg" title="LangZiGao"/>
    </div>
    <nav class="nav">
        <a href="#info">资料</a>
        <a href="#skills">技能</a>
        <a href="#works">作品</a>
        <a href="#story">经历</a>
        <a href="#team">团队</a>
    </nav>
</aside>
    <main>
    <section id="info">
        <div class="wrap">
            <h2 class="title">个人资料</h2>
            <div class="row">
                <div class="col-l-4">
                    <p>Name：XXX</p>
                    <p>Gender：男</p>
                    <p>Age：xxxxxxxxxxx</p>
                    <p>Prefer Name：Moreduo</p>
                    <p>Degree：xxxxxxxxx</p>
                </div>
                <div class="col-l-4">
                    <p>QQ：XXX</p>
                    <p>GitHub：<a href="/">Moreduo</a></p>
                    
                    <p>Email：<a href="mailto:XXX@qq.com">XXX@qq.com</a></p>
                </div>
                <div class="col-l-4">
                    <p>ready to add</p>
                </div>
            </div>
        </div>
    </section>
    <section id="skills">
        <div class="wrap">
            <h2 class="title">Skill that i have</h2>
            <div class="row scrollable">
                <div class="col-s-6 col-m-4 center-fixed">
                    <div class="skills-icon">
                        <i class="fa fa-html5"></i>
                    </div>
                    <div class="skills-title">
                        <h3>HTML 5</h3>
                        <p>ready to addd</p>
                    </div>
                </div>
                <div class="col-s-6 col-m-4 center-fixed">
                    <div class="skills-icon">
                        <i class="fa fa-css3"></i>
                    </div>
                    <div class="skills-title">
                        <h3>CSS3</h3>
                        <p>ready to addd</p>
                    </div>
                </div>
                <div class="col-s-6 col-m-4 center-fixed">
                    <div class="skills-icon">
                        <i class="fa fa-code"></i>
                    </div>
                    <div class="skills-title">
                        <h3>JavaScript</h3>
                        <p>ready to addd</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="works">
        <div class="wrap">
            <h2 class="title">ready to addd</h2>
 
        </div>
    </section>
    <section id="story">
        <div class="wrap">
            <h2 class="title">ready to addd</h2>
            <div class="row">
                <div class="col-m-8">
                    <ul class="timeline">











                    </ul>
                </div>
                <div class="col-m-4 center-fixed">
                    <img src="static/img/story.png"/>
                </div>
            </div>
        </div>
    </section>
    <section class="content-d" id="team">
        <div class="wrap">
            <h2 class="title">ready to addd</h2>
            <div class="row">
                <div class="col-m-6">
                 










                </div>
                <div class="col-m-6 center">
                    <img src="static/img/team.png"/>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <p>© 2020.</p>
    </footer>
</main>
</body>
  );
}

export default App;
