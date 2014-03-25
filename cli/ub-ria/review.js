/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * review.js ~ 2014/03/25 11:48:03
 * @author leeight(liyubei@baidu.com)
 * @version $Revision$ 
 * @description 
 *  
 **/

/**
 * 命令行配置项
 * @type {Object}
 */
var cli = {};

/**
 * 命令描述信息
 *
 * @type {string}
 */
cli.description = '发起Code Review';

/**
 * 命令入口
 *
 * @param {Array} args 命令运行参数
 * @param {Object} opts 命令运行选项
 */
cli.main = function ( args, opts ) {
    var edp = require( 'edp-core' );
    var cmd = require( 'ub-ria-tool/lib/cli' );

    try {
        // 去掉一个参数，保证逻辑的正确.
        process.argv.shift();
        cmd.run();
    }
    catch( ex ) {
        edp.log.error( ex.toString() );
    }
}

exports.cli = cli;





















/* vim: set ts=4 sw=4 sts=4 tw=100: */
