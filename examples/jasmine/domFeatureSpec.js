describe("DOM Element Selection", function() {
    it("Should support getElementsByClassName", function() {
        $('body').append('<div id="root"><span class="foo"><span class="foo"></div>');

        var elements = $('.foo');
        
        expect(elements.length).toEqual(2);

        $('#root').remove();
    });
});

describe("SVG", function() {
    var ns = 'http://www.w3.org/2000/svg';
    
    it("Should support the SVG namespace.", function() {
        var svg = document.createElementNS(ns, 'svg');
        
        expect(svg.nodeName.toLowerCase()).toEqual("svg");
    });
    
    it("Should create append an SVG element to the document.", function() {
        var svg = document.createElementNS(ns, 'svg');
        
        svg.setAttribute("width", "50px"); 
        svg.setAttribute("height", "50px");
        
        document.body.appendChild(svg);
        
        var elts = document.getElementsByTagName('svg');
        
        expect(elts.length).toEqual(1);
        expect(elts[0]).toEqual(svg);
        
        svg.parentNode.removeChild(svg);
    });
    
    it("Should create an ellipse and add it to the document.", function() {
        var svg = document.createElementNS(ns, 'svg');
        
        svg.setAttribute("width", "50px"); 
        svg.setAttribute("height", "50px");
        
        var ellipse = document.createElementNS(ns, 'ellipse');
        ellipse.setAttribute("cx", "25");
        ellipse.setAttribute("cy", "25");
        ellipse.setAttribute("rx", "20");
        ellipse.setAttribute("ry", "15");
        ellipse.setAttribute("fill", "#000000");
        
        svg.appendChild(ellipse);
        
        document.body.appendChild(svg);
        
        var elts = document.getElementsByTagName('ellipse');
        
        expect(elts.length).toEqual(1);
        expect(elts[0]).toEqual(ellipse);
        expect(elts[0].parentNode).toEqual(svg);
        
        svg.parentNode.removeChild(svg);
    });
});

describe('UIEvent', function() {
    it('Should support the creation and dispatch of mouse events.', function() {
        $('body').append('<div id="root"></div>');

        var triggered = false;
        var elt = document.getElementById('root');
        
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        
        elt.addEventListener('click', function(evt) {
            expect(evt.type).toEqual('click');
            triggered = true;
        }, false);
        
        elt.dispatchEvent(evt);
        
        expect(triggered).toEqual(true);

        $('#root').remove();
    });
});