function image(item) {

    switch (item.item_id) {
        case 1001 : return require('./images/1001.png');
        case 1002 : return require('./images/1002.png');
        case 1003 : return require('./images/1003.png');
        case 1004 : return require('./images/1004.png');
        case 1005 : return require('./images/1005.png');
        case 1006 : return require('./images/1006.png');
        case 2001 : return require('./images/2001.png');
        case 2003 : return require('./images/2003.png');
        case 2004 : return require('./images/2004.png');
        case 2005 : return require('./images/2005.png');
        case 2006 : return require('./images/2006.png');
        case 2007 : return require('./images/2007.png');
        case 2008 : return require('./images/2008.png');
        case 2009 : return require('./images/2009.png');
        case 2010 : return require('./images/2010.png');
        default : require('./images/space.png');
    }
}

export default image;
