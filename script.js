function dot(v1, v2) {
    var dot=0;
    for (var i = 0; i < v1.length; i++) {
        dot += v1[i] * v2[i]
    }
   return dot
}
function orthogonal(v1,v2) {
    if (dot(v1,v2)==0){
        return 'orthogonal';
    }

}
