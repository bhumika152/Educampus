function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the search parameter from the URL
const searchParam = getQueryParameter('search');

// Check if the search parameter matches 'javascript'
if (searchParam === 'javascript') {
    // Redirect to javascript.html
    window.location.href = 'course-details.html';
}

else if(searchParam ==='css'){
    window.location.href = 'cssCourse.html';
}


else if(searchParam ==='java'){
    window.location.href = 'java.html';
}
else if(searchParam ==='python'){
    window.location.href = 'Python.html';
}
else if(searchParam ==='python in hindi'){
    window.location.href = 'pythonhindi.html';
}
else if(searchParam ==='php'){
    window.location.href = 'Php.html';
}
else if(searchParam ==='php in telugu'){
    window.location.href = 'Phptelugu.html';
}

else if(searchParam ==='react'){
    window.location.href = 'React.html';
}
else if(searchParam ==='react in punjabi'){
    window.location.href = 'reactpunjabi.html';
}
else if(searchParam ==='ai'){
    window.location.href = 'Ai.html';
}
else if(searchParam ==='ai in punjabi'){
    window.location.href = 'aipunjabi.html';
}
else if(searchParam ==='angular'){
    window.location.href = 'Angular.html';
}
else if(searchParam ==='angular in punjabi'){
    window.location.href = 'angularpunjabi.html';
}
else if(searchParam ==='cpp'){
    window.location.href = 'Cpp.html';
}
else if(searchParam ==='cpp in punjabi'){
    window.location.href = 'cpppunjabi.html';
}

else if(searchParam ==='data science'){
    window.location.href = 'DataScience.html';
}
else if(searchParam ==='data science in hindi'){
    window.location.href = 'datascihindi.html';
}
else if(searchParam ==='mysql'){
    window.location.href = 'MysqlCourse.html';
}
else if(searchParam ==='mysql in marathi'){
    window.location.href = 'mysqlmarathi.html';
}
else if(searchParam ==='power bi'){
    window.location.href = 'PowerBi.html';
}
else if(searchParam ==='power bi in tamil'){
    window.location.href = 'powerbitamil.html';
}

