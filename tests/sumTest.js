var should = require('should')
var sum = require('../sum')

describe('sum.js', function() {
	it('sum of 2 + 3 should return 5', function(){
		sum(2,3).should.be.equal(5)
	})

	it('sum of 10 + 10 should return 5', function(){
		sum(10,10).should.be.equal(20)
	})
	
	it('sum of 10 + 5 + 10 should return 25', function(){
		sum(10,5,10).shold.be.equal(20)
	})
})

