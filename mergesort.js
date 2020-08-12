( function () {
    const items = [ 3, 2, 1, 4 ];

    function mergeSort( items, low, high ) {
        if ( low < high ) {
            const middle = Math.floor( ( low + high ) / 2 );
            mergeSort( items, low, middle );
            mergeSort( items, middle + 1, high );
            merge( items, low, middle, high );
        }
    }

    function merge( items, low, middle, high ) {
        const buffer1 = [], buffer2 = [];

        for (let i = low; i <= middle; i++ ) {
            buffer1.push( items[ i ] );
        }

        for (let i = middle + 1; i <= high; i++ ) {
            buffer2.push( items[ i ] );
        }

        let i = low; // start from first item of the entire list

        while ( buffer1.length && buffer2.length ) {
            // Check which left-most element of both lists is the smallest (or equal)
            if ( buffer1[ 0 ] <= buffer2[ 0 ] ) {
                items[ i++ ] = buffer1.shift();
            } else {
                items[ i++ ] = buffer2.shift();
            }
        }

        while ( buffer1.length ) { items[ i++ ] = buffer1.shift(); }
        while ( buffer2.length ) { items[ i++ ] = buffer2.shift(); }
    }

    console.clear();
    console.log( items );
    mergeSort( items, 0, items.length - 1 );
    console.log( items );
} )();