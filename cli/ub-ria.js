/***************************************************************************
 * 
 * Copyright (c) 2014 Baidu.com, Inc. All Rights Reserved
 * $Id$ 
 * 
 **************************************************************************/
 
 
 
/**
 * ub-ria.js ~ 2014/03/25 10:34:35
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
cli.description = '联盟前端技术部RIA系统工具库';

/**
 * 命令入口
 *
 * @param {Array} args 命令运行参数
 * @param {Object} opts 命令运行选项
 */
cli.main = function ( args, opts ) {
    console.log( 'See `edp ub-ria --help`' );
}

exports.cli = cli;



















/* vim: set ts=4 sw=4 sts=4 tw=100: */
