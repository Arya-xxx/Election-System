var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
    var electionInstance;
    
    it("initialises with two candidates", function() {
        return Election.deployed().then(function(instance) {

            return instance.candidatesCount();
        }).then(function(count) {
            assert.equal(count,4);
        });
        });




        it("it initializes the candidates with the correct values", function() 
        
        
        {
            return Election.deployed().then(function(instance) {
              electionInstance = instance;
              return electionInstance.Candidates(1);
              
            }).then(function(Candidate)
             {
              assert.equal(Candidate[0], 1, "contains the correct id");
              assert.equal(Candidate[1], "Modi", "contains the correct name");
              assert.equal(Candidate[2], 0, "contains the correct votes count");
              return electionInstance.Candidates(2);



            }).then(function(Candidate) {
              assert.equal(Candidate[0], 2, "contains the correct id");
              assert.equal(Candidate[1], "Netanyahu", "contains the correct name");
              assert.equal(Candidate[2], 0, "contains the correct votes count");
              return electionInstance.Candidates(3);



          }).then(function(Candidate) {
            assert.equal(Candidate[0], 3, "contains the correct id");
            assert.equal(Candidate[1], "Biden", "contains the correct name");
            assert.equal(Candidate[2], 0, "contains the correct votes count");
            return electionInstance.Candidates(4);

          }).then(function(Candidate) {
              assert.equal(Candidate[0], 4, "contains the correct id");
              assert.equal(Candidate[1], "Putin", "contains the correct name");
              assert.equal(Candidate[2], 0, "contains the correct votes count");
          });



    });

})
