import asyncReducer from './index'
describe('reducers', () => {
  describe('asyncReducer', () => {
        it('should provide the initial state with no action', () => {
          expect(asyncReducer(undefined, {})).toEqual({
            initailBalance:20000,
            spent:0,
            left:20000,
            transactions:[],
            isError: false
        })
    })

    it('should provide initial state', () => {
        expect(asyncReducer(undefined, { type: 'INITIAL_BALANCE'})).toEqual({
          initailBalance:20000,
          spent:0,
          left:20000,
          transactions:[],
          isError: false
      })
    })

    it('should transfer amount', () => {
      expect(asyncReducer(undefined, { type: 'TRANSFER_BALANCE',data:{
        amount: 1500
      }})).toEqual({
        initailBalance:20000,
        spent:1500,
        left:18500,
        transactions:[],
        isError: false,"transactions": [{"amount": 1500, "email": undefined, "name": undefined}]
    })
    })

    it('should show no balance', () => {
      expect(asyncReducer(undefined, { type: 'TRANSFER_BALANCE',data:{
        amount: 25000
    }})).toEqual({
        initailBalance:20000,
        spent: 0,
        left:20000,
        transactions:[],
        isError: true
    })
    })

    it('should add transcation details', () => {
      expect(asyncReducer(undefined, { type: 'TRANSFER_BALANCE',data:{
        amount: 5000,
        name: "foo",
        email: "foo@gmail.com"
    }})).toEqual({
        initailBalance:20000,
        spent: 5000,
        left:15000,
        transactions:[{
          "amount": 5000,
          "email": "foo@gmail.com",
          "name": "foo",
        }],
        isError: false
    })
    })
 
  })
})