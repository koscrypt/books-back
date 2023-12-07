"use strict";
/**
 * Post track
 * @openapi
 * /resources/countries:
 *    get:
 *      tags:
 *        - Resources/Countries
 *      summary: "List countries by language"
 *      description: List countries by language
 *      parameters:
 *       - in: header
 *         name: Version
 *         schema:
 *         type: string
 *         required: true
 *       - in: query
 *         name: languageId
 *         schema:
 *         type: number
 *         required: true
 *      responses:
 *        '200':
 *          $ref: "#/components/responses/200"
 *        '400':
 *          $ref: "#/components/responses/400"
 *        '422':
 *          $ref: "#/components/responses/422"
 */
/**
 * Post track
 * @openapi
 * /resources/countries:
 *    post:
 *      tags:
 *        - Resources/Countries
 *      summary: "Create countries"
 *      description: Create countries
 *      parameters:
 *       - in: header
 *         name: Version
 *         schema:
 *         type: string
 *         required: true
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/newCountry"
 *      responses:
 *        '201':
 *          $ref: "#/components/responses/200"
 *        '400':
 *          $ref: "#/components/responses/400"
 *        '422':
 *          $ref: "#/components/responses/422"
 */
