var languagePhp = {
    name : 'PHP',
    kind : 'backend',
    level : 'C'
};
var languageJava = {
    name : 'Java',
    kind : 'backend',
    level : 'D'
};
var languageJavaScript = {
    name : 'JavaScript',
    kind : 'frontend',
    level : 'E'
};
var languageMySql = {
    name : 'MySql',
    kind : 'database',
    level : 'B'
};
languages = [languagePhp, languageJava, languageJavaScript, languageMySql];
// for (var i = 0; i <= languages.length; i++) {
//     document.getElementById('name').textContent = languages[i].name;
//     document.getElementById('kind').textContent = languages[i].kind;
//     document.getElementById('level').textContent = languages[i].level;
// }
document.getElementById('name').textContent = languagePhp.name;
document.getElementById('kind').textContent = languagePhp.kind;
document.getElementById('level').textContent = languagePhp.level;
