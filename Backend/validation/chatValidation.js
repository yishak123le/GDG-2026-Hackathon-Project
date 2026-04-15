import Joi from "joi";

const sendMessageSchema = Joi.object({
    receiverId: Joi.string()
        .required()
        .messages({
            "string.empty": "receiverId is required",
            "any.required": "receiverId is required"
        }),
    message: Joi.string()
        .trim()
        .when('audioUrl', { is: Joi.exist(), then: Joi.forbidden() })
        .when('videoUrl', { is: Joi.exist(), then: Joi.forbidden() })
        .when('imageUrl', { is: Joi.exist(), then: Joi.forbidden() }),
    audioUrl: Joi.string()
        .trim()
        .when('message', { is: Joi.exist(), then: Joi.forbidden() })
        .when('videoUrl', { is: Joi.exist(), then: Joi.forbidden() })
        .when('imageUrl', { is: Joi.exist(), then: Joi.forbidden() }),
    videoUrl: Joi.string()
        .trim()
        .when('message', { is: Joi.exist(), then: Joi.forbidden() })
        .when('audioUrl', { is: Joi.exist(), then: Joi.forbidden() })
        .when('imageUrl', { is: Joi.exist(), then: Joi.forbidden() }),
    imageUrl: Joi.string()
        .trim()
        .when('message', { is: Joi.exist(), then: Joi.forbidden() })
        .when('audioUrl', { is: Joi.exist(), then: Joi.forbidden() })
        .when('videoUrl', { is: Joi.exist(), then: Joi.forbidden() })
}).or('message', 'audioUrl', 'videoUrl', 'imageUrl');

const updateMessageSchema = Joi.object({
    message: Joi.string()
        .trim()
        .when('audioUrl', { is: Joi.exist(), then: Joi.forbidden() })
        .when('videoUrl', { is: Joi.exist(), then: Joi.forbidden() })
        .when('imageUrl', { is: Joi.exist(), then: Joi.forbidden() }),
    audioUrl: Joi.string()
        .trim()
        .when('message', { is: Joi.exist(), then: Joi.forbidden() })
        .when('videoUrl', { is: Joi.exist(), then: Joi.forbidden() })
        .when('imageUrl', { is: Joi.exist(), then: Joi.forbidden() }),
    videoUrl: Joi.string()
        .trim()
        .when('message', { is: Joi.exist(), then: Joi.forbidden() })
        .when('audioUrl', { is: Joi.exist(), then: Joi.forbidden() })
        .when('imageUrl', { is: Joi.exist(), then: Joi.forbidden() }),
    imageUrl: Joi.string()
        .trim()
        .when('message', { is: Joi.exist(), then: Joi.forbidden() })
        .when('audioUrl', { is: Joi.exist(), then: Joi.forbidden() })
        .when('videoUrl', { is: Joi.exist(), then: Joi.forbidden() }),
    status: Joi.string()
        .valid("sent", "delivered", "seen")
});

export { sendMessageSchema, updateMessageSchema };