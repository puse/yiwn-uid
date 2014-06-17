var expect = chai.expect;

var uid = require('uid');

describe('UID', function(){
    it('should work with or without arguments', function(){
        var id1 = uid(),
            id2 = uid('pre-'),
            id3 = uid('pre-', 6),
            id4 = uid(6);

        expect(id1)
            .to.match(/^[0-9a-f]+$/)
            .to.have.length(4);

        expect(id2)
            .to.match(/^pre\-/)
            .to.have.length(4 + 4);

        expect(id3)
            .to.match(/^pre\-/)
            .to.have.length(4 + 6);

        expect(id4)
            .to.have.length(6);
    });

    it('should avoid collision', function () {
        var tries = 50;

        while (tries--) uid(1);

        expect(uid(1))
            .to.have.length(2);
    });

});
