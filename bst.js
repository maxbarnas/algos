( function () {
    const items = [ 1, 7, 5, 8, 4, 2, 6, 3, 9 ];
    let btree;

    function createNode( data, parent = null, left = null, right = null ) {
        return {
            data,
            left,
            right
        };
    }

    function insertNode( tree, data, parent, updateClb ) {
        if ( !tree ) {
            const node = createNode( data, parent );
            updateClb( node );
            return;
        }

        if ( data < tree.data ) {
            insertNode( tree.left, data, parent, ( n ) => {
                tree.left = n;
            }
            );
        } else {
            insertNode( tree.right, data, parent, ( n ) => {
                tree.right = n;
            }
            );
        }
    }

    function traverse( tree, buffer ) {
        if ( !tree ) {
            return;
        }
        traverse( tree.left, buffer );
        buffer.push( tree.data );
        traverse( tree.right, buffer );
    }




    console.clear();

    for ( let i = 0; i < items.length; i++ ) {
        insertNode( btree, items[ i ], null, ( node ) => {
            btree = node;
        }
        );
    }

    let buf = [];

    console.log( 'tree', btree );
    traverse( btree, buf );
    console.log( buf );
    console.log( 'Tree traversed' );
}
)();
