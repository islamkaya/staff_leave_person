module.exports = {
    async createTicket(ctx) {
        const { leaveStartDate, leaveEndDate, ticketDescription, ticketDay, ticketType } = ctx.request.body;

        var userId = await this.checkUserJwt(ctx.headers.authorization);
        


        

        await strapi.query("api::ticket.ticket").create({
            data: {
                leaveStartDate: leaveStartDate,
                leaveEndDate: leaveEndDate,
                ticketDescription: ticketDescription,
                ticketDay: ticketDay,
                ticket_type: ticketType,
                user: userId,
                name: userId,
                surName: userId
            }
        });

        return "200"
    },

    async checkUserJwt(token) {
        const payload = await
            strapi.plugins["users-permissions"].services.jwt.verify(token);
            console.log('payload :>> ', payload);
        return payload.id;
    }
};