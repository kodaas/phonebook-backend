/**
 * @swagger
 * components:
 *     schemas:
 *          Contact:
 *              type: object
 *              required:
 *                  - name
 *                  - phone
 *              properties:
 *                  _id: 
 *                      type: string
 *                      description: Auto-generated Id
 *                  name:
 *                      type: string
 *                      description: Contact name
 *                  phone:
 *                      type: string
 *                      description: Phone  Number
 *                  email:
 *                      type: string
 *                      description: Contact Email
 *              example:
 *                  _id: 62c9431838ce3705b78ce7b6
 *                  name: "John Doe"
 *                  email: "john@doe.com"
 *                  phone: "+2349038898923"
 */ 


/**
 * @swagger
 * /contact:
 *   get:
 *     summary: Returns the list of all the contacts
 *     tags: [Contact]
 *     responses:
 *       200:
 *         description: The list of the contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 */

/**
 * @swagger
 * /contact/{id}:
 *   get:
 *     summary: Returns a single contact Info
 *     tags: [Contact]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The contact id
 *     responses:
 *       200:
 *         description: A Single contact
 *         content:
 *           application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Contact'
 */


/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Create a new Contact
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       200:
 *         description: The contact was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /contact/{id}:
 *  put:
 *    summary: Update the contact by the id
 *    tags: [Contact]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The contact id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Contact'
 *    responses:
 *      200:
 *        description: The contact was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Contact'
 *      404:
 *        description: The contact was not found
 *      500:
 *        description: Some error happened
 */

/**
 * @swagger
 * /contact/{id}:
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Contact]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The contact id
 * 
 *     responses:
 *       200:
 *         description: The contact was deleted
 *       404:
 *         description: The contact was not found
 */