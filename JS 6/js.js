var arr = [1, 2, 6, -4, 10, 15];

function min (arr) {
    var _min = 0;
        for ( var i = 0; i < arr.length; i++) {
            if (arr [i] < _min) {
                _min = arr [i];
            }
    }
return _min;
}
