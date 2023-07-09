// Skills Generator =====================================================================================

for (let i = 0; i < mySkills.length; i++) {
    let skillsCont = document.createElement('div');
    skillsCont.className = `${mySkills[i][0]}-skills skills`;
    for (let j = 1; j < mySkills[i].length; j++) {
        let skill = document.createElement('div');
        skill.className = 'skill';
        let skillTitle = document.createElement('p');
        skillTitle.appendChild(document.createTextNode(mySkills[i][j].skillTitle));
        skill.innerHTML = mySkills[i][j].skillImage
        skill.appendChild(skillTitle);
        skillsCont.appendChild(skill);
    }
    document.querySelector('#skills section.tech-list .container').appendChild(skillsCont);
}

// Projects Generator ===================================================================================

let projectsCont = document.createElement('div');
projectsCont.className = 'projects'
for (let i = 0; i < myProjects.length; i++) {
    let project = document.createElement('div');
    project.className = 'project';
    let projectImage = document.createElement('img');
    projectImage.src = `images/${myProjects[i].projectImage}`;
    projectImage.alt = 'Project Image';
    let projectTitle = document.createElement('h2');
    projectTitle.appendChild(document.createTextNode(myProjects[i].projectTitle));
    let projectDescription = document.createElement('p');
    projectDescription.className = 'description';
    projectDescription.appendChild(document.createTextNode(myProjects[i].projectDescription || ''));
    let projectInfo = document.createElement('div');
    projectInfo.className = 'info';
    if (!!myProjects[i].projectLink) {
        let projectLink = document.createElement('a');
        projectLink.className = 'view';
        projectLink.href = myProjects[i].projectLink;
        projectLink.appendChild(document.createTextNode('Live Demo'));
        projectLink.innerHTML += '<i class="fas fa-external-link-alt"></i>';
        projectInfo.appendChild(projectLink);
    }
    let projectSource = document.createElement('a');
    projectSource.className = 'github-src';
    projectSource.href = myProjects[i].projectSource;
    projectSource.appendChild(document.createTextNode('Source Code'));
    projectSource.innerHTML += '<i class="fab fa-github"></i>';
    projectInfo.appendChild(projectSource);
    project.appendChild(projectImage);
    project.appendChild(projectTitle);
    project.appendChild(projectDescription);
    project.appendChild(projectInfo);
    projectsCont.appendChild(project);
}
document.querySelector('a.all-projects').before(projectsCont);


/* 
    <div class="languages-skills skills">
                <div class="skill">
                    <p>HTML5</p>
                    <div class="holder"><span data-prog="90%"></span></div>
                </div>
                <div class="skill">
                    <p>CSS3</p>
                    <div class="holder"><span data-prog="85%"></span></div>
                </div>
                <div class="skill">
                    <p>JavaScript</p>
                    <div class="holder"><span data-prog="80%"></span></div>
                </div>
                <div class="skill">
                    <p>Python</p>
                    <div class="holder"><span data-prog="60%"></span></div>
                </div>
            </div>
            <div class="frameworks-skills skills">
                <div class="skill">
                    <p>Angular JS</p>
                    <div class="holder"><span data-prog="86%"></span></div>
                </div>
                <div class="skill">
                    <p>React JS</p>
                    <div class="holder"><span data-prog="75%"></span></div>
                </div>
                <div class="skill">
                    <p>Node JS</p>
                    <div class="holder"><span data-prog="81%"></span></div>
                </div>
                <div class="skill">
                    <p>Django</p>
                    <div class="holder"><span data-prog="56%"></span></div>
                </div>
            </div>
            <div class="tools-skills skills">
                <div class="skill">
                    <p>Git</p>
                    <div class="holder"><span data-prog="94%"></span></div>
                </div>
                <div class="skill">
                    <p>SQL</p>
                    <div class="holder"><span data-prog="75%"></span></div>
                </div>
                <div class="skill">
                    <p>Docker</p>
                    <div class="holder"><span data-prog="83%"></span></div>
                </div>
            </div>
            <div class="soft-skills skills">
                <div class="skill">
                    <p>Leadership Skills</p>
                    <div class="holder"><span data-prog="90%"></span></div>
                </div>
                <div class="skill">
                    <p>Team Working Skills</p>
                    <div class="holder"><span data-prog="85%"></span></div>
                </div>
                <div class="skill">
                    <p>Marketing</p>
                    <div class="holder"><span data-prog="80%"></span></div>
                </div>
                <div class="skill">
                    <p>Time Manangment</p>
                    <div class="holder"><span data-prog="93%"></span></div>
                </div>
            </div>
*/

/* 
    <div class="projects">
                <div class="project">
                    <img src="images/project1.png" alt="Project Images">
                    <h2>Leon Template</h2>
                    <p class="description">
                        This portfolio is the first template i made after the HTML & CSS 2021 course on Elzero Web School YouTube channel.
                    </p>
                    <div class="info">
                        <a class="view" href="https://hayook.github.io/Leon-Template/">View Project <i class="fas fa-external-link-alt"></i></a>
                        <a class="github-src" href="https://github.com/hayook/Leon-Template">Source Code <i class="fab fa-github"></i></a>
                    </div>
                </div>

                <div class="project">
                    <img src="images/project2.png" alt="Project Images">
                    <h2>Kasper Template</h2>
                    <p class="description">
                        This buisiness Website is the second template i made after the HTML & CSS 2021 course on Elzero Web School YouTube channel.
                    </p>
                    <div class="info">
                        <a class="view" href="https://hayook.github.io/Kasper-Template/">View Project <i class="fas fa-external-link-alt"></i></a>
                        <a class="github-src" href="https://github.com/hayook/Kasper-Template">Source Code <i class="fab fa-github"></i></a>
                    </div>
                </div>
                <div class="project">
                    <img src="images/project3.png" alt="Project Images">
                    <h2>F & R Template</h2>
                    <p class="description">
                        I made this online store for my friend's brand based on Phone_Mster Repo on GitHub.
                    </p>
                    <div class="info">
                        <a class="view" href="https://hayook.github.io/F-R-Template/">View Project <i class="fas fa-external-link-alt"></i></a>
                        <a class="github-src" href="https://github.com/hayook/F-R-Template">Source Code <i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
*/