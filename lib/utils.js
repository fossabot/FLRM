/**
*@package
* utils package from NODEJS
*/
var util = require('util');
/**
*@package
* no-deprecation by tapu cosmo
*/
var nodep = require('no-deprecation')
/**
*@package
* { table } from table by gajus
*/
var { table } = require('table');
/**
*@function get packets
*@package
*@param {array} packet the list of packets to format and get signals from
*@returns process signal / sql server
*/
function get_packets(packet = [1,4]){
  return function () {
    this.pack;
    if(!packet[2]){
      switch(packet[1]){
        case 4:
          this.pack = 16;
          break;
        case 2:
          this.pack = 3;
          break;
        default:
          this.pack = 8;
          break;
      }
      this.pack = this.pack / packet[0];
      return this.pack;
    }else
      {
        return packet[2] + packet[1] / packet[0];
      };
  }
}



module.exports.get_packets = get_packets;