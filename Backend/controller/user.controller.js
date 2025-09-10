import "../models/connection.js";
import url from 'url';
import jwt from "jsonwebtoken";
import rs from "randomstring";

import UserSchemaModel from "../models/user.model.js";

export const save = async (req, res) => {
  const users = await UserSchemaModel.find({ 'role': 'user' });
  const l = users.length;
  const _id = l == 0 ? 1 : users[l - 1]._id + 1;
  const userDetails = { ...req.body, '_id': _id, 'status': 0, 'role': 'user', 'info': Date() };
  console.log(userDetails);
  try {
    await UserSchemaModel.create(userDetails);
    res.status(201).json({ "status": true });
  }
  catch (error) {
    res.status(500).json({ "status": false });
  }
};

export const fetch = async (req, res) => {
  var condition_obj = url.parse(req.url, true).query.condition_obj;
  if (condition_obj != undefined)
    condition_obj = JSON.parse(condition_obj);
  else
    condition_obj = {};
  var userList = await UserSchemaModel.find(condition_obj);
  if (userList.length != 0)
    res.status(200).json(userList);
  else
    res.status(402).json({ "status": "Resource not found" });
};

export var deleteUser = async (req, res) => {
  var obj = req.body;
  if (obj != undefined) {
    var condition_obj = JSON.parse(req.body.condition_obj);
    let userDetails = await UserSchemaModel.findOne(condition_obj);
    if (userDetails) {
      let user = await UserSchemaModel.deleteOne(condition_obj);
      if (user)
        res.status(200).json({ "status": "OK" });
      else
        res.status(500).json({ "status": "Server Error" });
    }
    else
      res.status(404).json({ "status": "Requested resource not available" });
  }
  else
    res.status(500).json({ "status": "Please enter valid condition" });
};


export var update = async (req, res) => {
  var obj = req.body;
  if (obj != undefined) {
    let userDetails = await UserSchemaModel.findOne(JSON.parse(req.body.condition_obj));
    if (userDetails) {
      let user = await UserSchemaModel.updateOne(JSON.parse(req.body.condition_obj), { $set: JSON.parse(req.body.content_obj) });
      if (user)
        res.status(200).json({ "msg": "OK" });
      else
        res.status(500).json({ "status": "Server Error" });
    }
    else
      res.status(404).json({ "status": "Requested resource not available" });
  }
  else
    res.status(500).json({ "status": "Please enter valid condition" });
};


export const login = async (req, res) => {
  var condition_obj = { ...req.body, "status": 1 };
  var userList = await UserSchemaModel.find(condition_obj);
  if (userList.length != 0) {
    const payload = userList[0].email;
    const key = rs.generate(50);
    const token = jwt.sign(payload, key);
    res.status(200).json({ "token": token, "userDetails": userList[0] });
  }
  else
    res.status(500).json({ "token": "error" });
};



