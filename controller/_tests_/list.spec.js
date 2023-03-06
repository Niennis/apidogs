const { 
  getList
 } = require('../list');

 describe.skip('getList', () => {

    it('La ruta funciona', async () => {
      const response = await request(app).get('api/breed/list/all/')
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('json');
    })

})