create
-------

### Usage

    edp ub-ria create path/to/file/xx.js   生成一个js文件，路径为项目根目录起始
    edp ub-ria create path/to/file/xx.less 生成一个less文件，路径为项目根目录起始
    edp ub-ria create path/to/file/xx.html 生成一个html文件，路径为项目根目录起始

    edp ub-ria create control {ControlType} [--extends {BaseType}]   生成控件模板，路径为以"src"为基准，如：

        edp ub-ria create control order/ui/ScheduleTable
        edp ub-ria create control BubbleTip --extends esui/Tip
        edp ub-ria create control creative/ui/Thumbnail --extends ui/ImagePanel

    edp ub-ria create module {entity}      初始化业务模块，生成配置文件
    edp ub-ria create list for {entity}    生成对应实体的列表页
    edp ub-ria create form for {entity}    生成对应实体的表单页
    edp ub-ria create read for {entity}    生成对应实体的只读页
    edp ub-ria create detail for {entity}  生成对应实体的详情页
